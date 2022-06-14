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
    <div className="grid grid-cols-1 mt-4 gap-2 justify-center grid-cols-low md:grid-cols-2 lg:grid-cols-4 mx-auto w-3/5 lg:grid-cols-max md:grid-cols-mid">
      {data.data.map((el: any) => {
        return <UserCard key={el.id} {...el}></UserCard>;
      })}
    </div>
  );
};
