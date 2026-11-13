import { execFileSync } from "child_process"
import { existsSync, readFileSync } from "fs"

const git = (...args: string[]) =>
  execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim()

let shallowBoundaries: Set<string> | undefined

// In a shallow clone (e.g. Vercel's depth-10 checkout), boundary commits look like
// root commits that "add" every file, so their dates must not be trusted.
const getShallowBoundaries = () => {
  if (!shallowBoundaries) {
    const file = git("rev-parse", "--git-path", "shallow")
    shallowBoundaries = new Set(existsSync(file) ? readFileSync(file, "utf-8").split("\n").filter(Boolean) : [])
  }
  return shallowBoundaries
}

/**
 * Returns the ISO date of the last commit touching any of the given paths,
 * or undefined when git is unavailable, the paths have no history, or the
 * real last change lies beyond a shallow clone's history.
 */
export const getGitLastModified = (...paths: string[]): string | undefined => {
  try {
    const [hash, date] = git("log", "-1", "--format=%H %cI", "--", ...paths).split(" ")

    if (!hash || !date || getShallowBoundaries().has(hash)) return undefined

    return date
  } catch {
    return undefined
  }
}
