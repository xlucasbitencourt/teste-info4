import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

export default function PageNavBar() {
  const { pathname } = useLocation();

  return (
    <Navbar fluid rounded>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={pathname === "/"}>
          <p className="text-xl">Create task</p>
        </Navbar.Link>
        <Navbar.Link as={Link} to="/tasks" active={pathname === "/tasks"}>
          <p className="text-xl">Tasks</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
