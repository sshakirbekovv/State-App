import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import { useFname } from "../../redux/fname/fname.selector";
import {
  deleteNextUpAction,
  incompletedAction,
} from "../../redux/queue/queue.actions";
import { useQueue } from "../../redux/queue/queue.selector";
import { getStatus } from "../../utils/getstatus";
import "./FilesPage.scss";

const FilesPage: React.FC = () => {
  const { fname, fsize } = useFname();
  const { id, uploading, nextup, completed, status, incompleted } = useQueue();
  const dispatch = useDispatch();

  const cancelUpload = () => {
    dispatch(incompletedAction({ id, fname, fsize }));
  };

  return (
    <div className="filespage">
      <Container>
        <div className="filespage__body">
          <div className="filespage__body-header">
            <h3>Uploading</h3>
            <span onClick={cancelUpload}>Cancel Upload</span>
          </div>
          <div className="filespage__body-stage">
            {uploading.length >= 1 ? (
              <>
                {uploading.map((item, i: number) => (
                  <Card
                    name={item.fname}
                    size={item.fsize}
                    status={getStatus(status)}
                  />
                ))}
              </>
            ) : (
              <div className="nofiles">No file uploading yet.</div>
            )}
          </div>
          <div className="filespage__body-header">
            <h3>Next Up</h3>
            <span>Cancel All</span>
          </div>
          <div className="filespage__body-stage">
            {nextup.length >= 1 ? (
              <>
                {nextup.map((item, i: number) => (
                  <Card
                    name={item.fname}
                    size={item.fsize}
                    close={true}
                    status={getStatus(status)}
                    onClose={() => dispatch(deleteNextUpAction(i))}
                  />
                ))}
              </>
            ) : (
              <div className="nofiles">No file next up yet.</div>
            )}
          </div>
          <div className="filespage__body-header">
            <h3>Completed</h3>
            <span>Dismiss All</span>
          </div>
          <div className="filespage__body-stage">
            {completed.length >= 1 ? (
              <>
                {completed.map((item, i: number) => (
                  <Card
                    name={item.fname}
                    size={item.fsize}
                    close={true}
                    status={getStatus(status)}
                    onClose={() => dispatch(deleteNextUpAction(i))}
                  />
                ))}
              </>
            ) : (
              <div className="nofiles">No file completed yet.</div>
            )}
          </div>
          <div className="filespage__body-header">
            <h3>Incomplete Uploads</h3>
            <div>
              <span>Retry All</span>&nbsp;&nbsp;
              <span>Dismiss All</span>
            </div>
          </div>
          <div className="filespage__body-stage">
            {incompleted.length >= 1 ? (
              <>
                {incompleted.map((item, i: number) => (
                  <Card
                    name={item.fname}
                    size={item.fsize}
                    close={true}
                    status={getStatus(status)}
                    onClose={() => dispatch(deleteNextUpAction(i))}
                  />
                ))}
              </>
            ) : (
              <div className="nofiles">No file incompleted yet.</div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilesPage;
