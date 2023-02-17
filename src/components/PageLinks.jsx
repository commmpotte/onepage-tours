import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PgeLink'

//Передаем пропсы для использования ссылок в разных частях страницы
function PageLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default PageLinks