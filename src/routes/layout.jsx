import { useEffect, useState } from 'react'
import { Outlet, useLocation, Link, NavLink, useNavigate, useNavigation } from 'react-router-dom'
import styles from './Layout.module.scss'

export default function Root() {
  return (
    <>
      <div className={styles.layout}>
        <header className={`${styles.header}`}></header>

        <main>
          <Outlet />
        </main>

        <footer></footer>
      </div>
    </>
  )
}
