import HeaderGithub from './header-github'
import { HeaderThemeToggle } from './header-theme-toggle'

export default function Header() {
  return (
    <div className="flex items-center justify-between p-2 w-full border-b">
      <h1 className="text-lg font-medium">
        By <span className="font-bold">@charlietlamb</span>
      </h1>
      <div className="flex items-center gap-2">
        <HeaderGithub />
        <HeaderThemeToggle />
      </div>
    </div>
  )
}
