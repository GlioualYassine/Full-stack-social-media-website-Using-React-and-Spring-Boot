import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");

  const handleSubmit = (values) => {
    console.log("values ", values);
  };

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgurl = event.target.files[0];
    formik.setFieldValue("image", imgurl);
    setSelectImage(imgurl);
    setUploadingImage(false);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div>
          <Avatar alt="username" src="/user.png" />
          <div className="w-full">
            <form>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is Happening"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 item-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer border">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "29px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
