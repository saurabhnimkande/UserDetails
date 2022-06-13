export const UserCard = ({ name, email, phone, website }: any) => {
  return (
    <div className="w-52 border-2 m-3 flex flex-col">
      <div className="p-3">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
          className="w-42 mx-auto"
        ></img>
      </div>

      <div className="p-3">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs mt-1.5 mb-2 text-gray-500">
          <span className="material-symbols-outlined text-sm relative top-0.5 mr-1">
            mail
          </span>
          {email}
        </p>
        <p className="text-xs mt-2 mb-2 text-gray-500">
          {" "}
          <span className="material-symbols-outlined text-sm relative top-0.5 mr-1">
            phone_enabled
          </span>
          {phone}
        </p>
        <p className="text-xs mt-2 mb-2 text-gray-500">
          <span className="material-symbols-outlined text-sm relative top-0.5 mr-1">
            pin_drop
          </span>
          {website}
        </p>
      </div>

      <div className="border-t-2 flex justify-around pt-2 pb-1 ">
        <div>
          <span className="material-symbols-outlined text-base pl-1 text-red-500">
            favorite
          </span>
        </div>
        <div className="text-sm text-gray-300">|</div>
        <div>
          <span className="material-symbols-outlined text-base text-gray-500">
            drive_file_rename_outline
          </span>
        </div>
        <div className="text-sm text-gray-300">|</div>
        <div>
          <span className="material-symbols-outlined text-base pr-1 text-gray-500">
            delete
          </span>
        </div>
      </div>
    </div>
  );
};
