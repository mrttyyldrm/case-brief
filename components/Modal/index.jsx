import React, { useEffect, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

function Modal(props) {
  const userRoles = [
    { text: "Contributor", id: 1 },
    { text: "Author", id: 2 },
    { text: "Administrator", id: 3 },
    { text: "Subscriber", id: 4 },
  ];

  const userImages = [
    {
      id: 1,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-1.jpg",
    },
    {
      id: 2,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-2.jpg",
    },
    {
      id: 3,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-3.jpg",
    },
    {
      id: 4,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-4.jpg",
    },
    {
      id: 5,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-5.jpg",
    },
    {
      id: 6,
      source: "https://preview.yildirimmert.com/casebrief/img/avatar-6.jpg",
    },
  ];

  const [selectedAvatar, setSelectedAvatar] = useState({
    id: undefined,
    source: undefined,
  });

  const [error, setError] = useState({ isActive: false, text: "" });

  const [newUser, setNewUser] = useState({
    id: props.data?.id,
    fullname: props.data?.fullname,
    username: props.data?.username,
    email: props.data?.email,
    role: {
      id: props.data?.role.id,
      text: props.data?.role.text,
    },
    avatar: props.data?.avatar,
  });

  const createOrEditUser = (user) => {
    if (
      user.fullname !== undefined &&
      user.username !== undefined &&
      user.email !== undefined &&
      user.role !== undefined &&
      user.avatar !== undefined
    ) {
      props.data === undefined
        ? props.onCreateUserHandler(newUser)
        : props.onEditUserHandler(newUser);
    } else {
      setError({
        isActive: true,
        text: "Entered wrong / missing information!",
      });
      setTimeout(() => {
        setError({ isActive: false, text: "" });
      }, 2000);
    }
  };

  const selectRole = (id, text) => {
    setNewUser((prev) => ({
      ...prev,
      role: { id: id, text: text },
    }));
  };

  const selectAvatar = (id, source) => {
    setNewUser((prev) => ({
      ...prev,
      avatar: source,
    }));
    setSelectedAvatar({ id: id, source: source });
  };

  return (
    <section id="modal">
      <div id="modal-content">
        <div id="modal-title">
          <h2>{props.title}</h2>
        </div>
        <div id="modal-form">
          <Input
            type="text"
            value={newUser.fullname}
            placeholder="Full Name"
            onChange={(e) =>
              setNewUser((prev) => ({
                ...prev,
                fullname: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <Input
            type="text"
            placeholder="Email Address"
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <Select
            placeholder="Role"
            options={userRoles}
            onSelectHandler={selectRole}
            selectedRole={newUser.role}
          />
          <div id="modal-line">
            <hr />
            <label>Select avatar</label>
            <hr />
          </div>
          <div id="modal-avatars">
            {userImages.map((image, index) => (
              <img
                key={index}
                src={image.source}
                className={
                  selectedAvatar.id === image.id ||
                  newUser.avatar === image.source
                    ? "active"
                    : ""
                }
                onClick={() => selectAvatar(image.id, image.source)}
              />
            ))}
          </div>
          <div id="modal-buttons">
            <Button
              text={props.title}
              onClick={() => createOrEditUser(newUser)}
            />
            <Button
              icon="fa-solid fa-xmark"
              type="error icon"
              onClick={props.onCloseHandler}
            />
          </div>
        </div>
        {error.isActive && <div id="modal-error">{error.text}</div>}
      </div>
    </section>
  );
}

export default Modal;
