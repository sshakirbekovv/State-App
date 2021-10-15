import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import Container from "../Container/Container";
import { useDispatch } from "react-redux";
import {
  getFnameAction,
  getFsizeAction,
} from "../../redux/fname/fname.actions";
import {
  completedAction,
  generateId,
  nextUpAction,
  uploadingAction,
} from "../../redux/queue/queue.actions";
import { useQueue } from "../../redux/queue/queue.selector";
import { useFname } from "../../redux/fname/fname.selector";

const Header: React.FC = () => {
  const [finish, setFinish] = useState(false);
  const dispatch = useDispatch();
  const fileRef = useRef<any>(null);
  const { id, uploading, cancel } = useQueue();
  const { fname, fsize } = useFname();

  const triggerClick = () => {
    fileRef.current?.click();
  };

  const handleChange = (event: any) => {
    dispatch(getFnameAction(event.target.files[0].name));
    dispatch(getFsizeAction(Math.floor(event.target.files[0].size / 1000)));
    dispatch(generateId(Math.random()));
  };

  useEffect(() => {
    if (fname.length !== 0 && uploading.length < 1 && cancel === false) {
      dispatch(uploadingAction({ id, fname, fsize }));
      setTimeout(() => {
        dispatch(completedAction({ id, fname, fsize }));
        setFinish(true);
      }, 8000);
    }
    if (uploading.length >= 1) {
      dispatch(nextUpAction({ id, fname, fsize }));
      if (finish === true) {
        dispatch(uploadingAction({ id, fname, fsize }));
        setFinish(false);
      }
    }
    console.log(cancel);
  }, [dispatch, id, fname, fsize, finish, cancel]);

  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <h3 className="nav__title">Manage Files</h3>
          <div onClick={triggerClick} className="nav__add">
            <i className="fas fa-plus"></i>
          </div>
          <input
            className="nav__input"
            type="file"
            onChange={handleChange}
            ref={fileRef}
          />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
