import React from "react";
import { Poppins } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateUserInfo } from "@/store/userSlice";
const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});

const schema = z.object({
  rank: z.coerce.number().min(1, "Rank must be at least 1"),
  percentile: z.coerce
    .number()
    .min(1, "Percentile must be at least 1")
    .max(100, "Percentile must be at most 100"),
  correctAnswers: z.coerce
    .number()
    .min(1, "Current score must be at least 1")
    .max(30, "Current score must be at most 30"),
});

const UpdateStatsModal = ({ toogleModal }) => {
  const { rank, percentile } = useSelector((state) => state.user);
  const { correctAnswers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      rank: rank,
      percentile: percentile,
      correctAnswers: correctAnswers.correct,
    },
  });

  const onSubmit = (data) => {
    dispatch(updateUserInfo(data));
    toogleModal();
  };

  const formItems = [
    {
      id: 1,
      title: "Rank",
      fieldIdentifier: "rank",
      fieldType: "number",
    },
    {
      id: 2,
      title: "Percentile",
      fieldIdentifier: "percentile",
      fieldType: "number",
    },
    {
      id: 3,
      title: `Current Score (out of ${correctAnswers.total})`,
      fieldIdentifier: "correctAnswers",
      fieldType: "number",
    },
  ]; //Again i am too lazy to build the wholw form. tbh the html looks very messy this method is goated!

  return (
    <div className="fixed inset-0 z-[99] bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div
        className={`bg-white p-3 md:p-6 rounded-lg shadow-lg max-w-md w-full md:max-w-lg lg:max-w-xl overflow-y-auto ${poppins.className} `}
      >
        <div className="flex justify-between">
          <p className="font-semibold text-xl text-black">Update Scores</p>
          <img
            src="/images/html_logo.png"
            alt="Html5 logo"
            className="w-9 h-9"
          />
        </div>
        <form className="py-9 space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {formItems.map((item) => {
            return (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex space-x-1 md:space-x-3">
                  <div className="bg-[#132278] md:w-6 md:h-6 w-5 h-5 rounded-full  flex justify-center items-center ">
                    <p className="text-white md:text-base text-sm">{item.id}</p>
                  </div>
                  <p className=" md:text-base text-xs text-black">
                    Update Your{" "}
                    <span className="font-semibold">{item.title}</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <Controller
                    name={item.fieldIdentifier}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-36 md:w-48 border outline-none border-blue-700 p-2 rounded md:rounded-lg text-black"
                        type={item.fieldType}
                      />
                    )}
                  />
                  {errors[item.fieldIdentifier] && (
                    <p className="text-red-500 text-xs">
                      {errors[item.fieldIdentifier]?.message}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex justify-end space-x-5">
            <button
              type="button"
              className="border border-[#132278] text-[#132278] md:p-3 p-2 rounded-lg hover:bg-[#132278] hover:text-white transition-all"
              onClick={toogleModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#132278] text-white py-2 px-5 md:py-3 md:px-8 rounded-lg flex hover:bg-white hover:text-[#132278] hover:border-[#132278] border transition-all "
            >
              <span className="mr-3">Save</span>
              <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatsModal;
