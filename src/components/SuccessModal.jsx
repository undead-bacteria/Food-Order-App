import React from "react";
import { useDispatch } from "react-redux";
import { toggleSuccessModal } from "../store/actions/cartActions";
import Button from "./Button";

function SuccessModal() {
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(toggleSuccessModal());
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center text-gray-800">
      <div className="bg-slate-50 w-1/2 flex flex-col p-6 gap-5">
        <h2 className="font-bold text-xl">Success</h2>
        <div className="flex flex-row justify-end gap-2">
          <Button handleClick={handleSuccess}>Okay</Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
