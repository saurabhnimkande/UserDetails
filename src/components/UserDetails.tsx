import React, { useEffect } from "react";
import { UserCard } from "./UserCard";
import { fetchUsers } from "../store/dataslice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
export const UserDetails = () => {
  const { data } = useAppSelector((state) => ({
    data: state.data,
  }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {data.data.map(() => {
        return <UserCard></UserCard>;
      })}
    </div>
  );
};
