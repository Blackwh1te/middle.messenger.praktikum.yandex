// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import RouterLink from 'shared/ui/RouterLink'
import defaultMenuItems from './defaultMenuItems'
import { THeaderMenu } from './types'

const HeaderMenu = (props: THeaderMenu) => {
  const { items = defaultMenuItems } = props

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {items.map(({ href, label }) => (
          <li className="header__menu-item">
            <Fragment>
              {
                new RouterLink({
                  className: 'header__menu-link',
                  href,
                  content: label,
                })
              }
            </Fragment>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderMenu
