import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type Props = {
  isVisible: boolean;
};

export const Login: FC<Props> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loginError, loggedInUser } = useSelector(
    (state: RootState) => state.auth
  );
  if (!props.isVisible) return null;

  // const [form, setForm] = useState({
  //   email: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setForm((prev) => ({
  //   ...prev,
  //   [e.target.name]: e.target.value,
  // }));
  // };

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   dispatch(login(form));

  //   setTimeout(() => {
  //     if (loggedInUser) {
  //       router.push("/");
  //     }
  //   }, 100);
  // };

  return (
    <div className=" bg-white text-[#2c0506] p-6 rounded-lg w-full">
      <form className="space-y-6">
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            // value={form.email}
            // onChange={handleChange}
            placeholder="@crum.com"
            className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c29b40] text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2c0506] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#c29b40] transition duration-300"
        >
          Continue
        </button>
      </form>
    </div>
  );
};
