"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Search from "../components/Search";
import Table from "../components/Table";
import Modal from "../components/Modal";
import "../styles/dashboard.scss";

function Dashboard() {
  const [modal, setModal] = useState({ situation: false, type: "" });

  const [roles, setRoles] = useState([
    { id: 0, text: "All Users", isActive: true },
    { id: 1, text: "Contributor", isActive: false },
    { id: 2, text: "Author", isActive: false },
    { id: 3, text: "Administrator", isActive: false },
    { id: 4, text: "Subscriber", isActive: false },
  ]);

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState({
    users: [],
    isFiltered: false,
  });
  const [filterParameters, setFilterParameters] = useState({
    roleid: 0,
    term: "",
  });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setUsers(JSON.parse(localStorage.getItem("users")));
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }

    setFilteredUsers({ users: users, isFiltered: false });
  }, [users]);

  useEffect(() => {
    const updatedRoles = roles.map((role) => {
      if (role.id === filterParameters.roleid) {
        return { ...role, isActive: true };
      } else {
        return { ...role, isActive: false };
      }
    });

    setRoles(updatedRoles);

    if (filterParameters.term !== "" && filterParameters.roleid !== 0) {
      setFilteredUsers({
        users: users.filter(
          (user) =>
            (user.fullname.includes(filterParameters.term.toLowerCase()) ||
              user.email.includes(filterParameters.term.toLowerCase())) &&
            user.role.id === filterParameters.roleid
        ),
        isFiltered: true,
      });
    } else if (filterParameters.roleid === 0 && filterParameters.term !== "") {
      setFilteredUsers({
        users: users.filter(
          (user) =>
            user.fullname.includes(filterParameters.term.toLowerCase()) ||
            user.email.includes(filterParameters.term.toLowerCase())
        ),
        isFiltered: true,
      });
    } else if (filterParameters.roleid !== 0 && filterParameters.term === "") {
      setFilteredUsers({
        users: users.filter((user) => user.role.id === filterParameters.roleid),
        isFiltered: true,
      });
    } else {
      setFilteredUsers({ users: users, isFiltered: false });
    }
  }, [filterParameters]);

  const createUser = (newUser) => {
    users.length > 0
      ? (newUser.id = users[users.length - 1].id + 1)
      : (newUser.id = 1);

    setUsers((prev) => [...prev, newUser]);
    setModal({ situation: false, type: "" });
  };

  const editUser = (data) => {
    const editedUser = users.find((user) => user.id === data.id);

    editedUser.fullname = data.fullname;
    editedUser.username = data.username;
    editedUser.email = data.email;
    editedUser.role.id = data.role.id;
    editedUser.role.text = data.role.text;
    editedUser.avatar = data.avatar;

    setUsers([...users]);
    setModal({ situation: false, type: "" });
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const removeAllUsers = () => {
    setUsers([]);
  };

  return (
    <>
      <header>
        <div id="header-title">
          <div id="title-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h2>Users</h2>
        </div>
        <nav id="header-filter">
          <Menu
            items={roles}
            onFilterUserHandler={(roleid) =>
              setFilterParameters({
                roleid: roleid,
                term: filterParameters.term,
              })
            }
          ></Menu>
        </nav>
        <div id="header-button">
          <Button
            onClick={() => setModal({ situation: true, type: "create" })}
            icon="fa-solid fa-user-plus"
            text="Create User"
          ></Button>
        </div>
      </header>
      <main>
        <nav id="main-navigation">
          <div id="navigation-search">
            <Search
              searchUserHandler={(term) =>
                setFilterParameters({
                  roleid: filterParameters.roleid,
                  term: term,
                })
              }
            />
          </div>
          <div id="navigation-button">
            <Button
              icon="fa-solid fa-trash-can"
              text="Delete All"
              type="error"
              onClick={removeAllUsers}
            />
          </div>
        </nav>
        <div id="main-table">
          <Table
            heads={["Avatar", "Fullname", "Username", "Email", "Role", "Edit"]}
            datas={filteredUsers.isFiltered ? filteredUsers.users : users}
            onRemoveUserHandler={removeUser}
            onEditUserHandler={(data) =>
              setModal({ situation: true, type: "edit", data: data })
            }
          />
        </div>
      </main>
      {modal.situation && modal.type === "create" && (
        <Modal
          title="Create User"
          onCloseHandler={() => setModal({ situation: false, title: "" })}
          onCreateUserHandler={createUser}
        />
      )}
      {modal.situation && modal.type === "edit" && (
        <Modal
          title="Edit User"
          data={modal.data}
          onCloseHandler={() => setModal({ situation: false, title: "" })}
          onEditUserHandler={editUser}
        />
      )}
    </>
  );
}

export default Dashboard;
