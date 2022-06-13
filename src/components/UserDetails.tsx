import React, { useEffect } from "react";
import { UserCard } from "./UserCard";
import { fetchUsers } from "../store/dataslice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
export const UserDetails = () => {
  const { data } = useAppSelector((state) => ({
    data: state.data,
  }));
  console.log(data.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto w-3/4">
      {data.data.map((el: any) => {
        return <UserCard key={el.id} {...el}></UserCard>;
      })}
    </div>
  );
};
