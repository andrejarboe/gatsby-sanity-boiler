import React from "react"

export default function Footer() {
  return (
    <footer className="mt-auto bg-teal-100 text-teal-900 text-xl text-center p-10">
      <p>
        &copy; {new Date().getFullYear} <span>Simple Recipes</span>. Built by{" "}
        <a
          href="https://www.peopleloveapps.com"
          className="text-purple-700 hover:text-purple-900 "
        >
          People Love Apps
        </a>
      </p>
    </footer>
  )
}
