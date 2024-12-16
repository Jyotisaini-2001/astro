/** @format */

"use client";

import { Dropdown, Navbar } from "flowbite-react";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded className="shadow-md py-8 px-2 md:px-8">
      <Navbar.Brand href="#">
        <img src="/brand_logo.svg" className="mr-3" alt="Logo" />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="text-center">
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#astrologer">Astrologers</Navbar.Link>
        <Navbar.Link href="#">Blogs</Navbar.Link>
        <div className="flex justify-center text-lg border border-gray-500 rounded-lg px-4 py-1">
          <Dropdown arrowIcon={true} inline label="English">
            <Dropdown.Item>Hindi</Dropdown.Item>
          </Dropdown>
        </div>
        <button className="text-lg bg-darkRed px-6 py-2 rounded-xl text-white mt-4 md:mt-0">
          Get App
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}
