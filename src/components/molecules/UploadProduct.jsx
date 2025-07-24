import React, { useState } from "react";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const UploadProduct = () => {
  const [formBody, setFormBody] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    colors: "",
    sizes: "",
  });

  const [image, setImage] = useState(null)


  const handleImage = (e) => {
    const file = e.target.files[0]; // extraction of file

    const reader = new FileReader(); // intializing  instance of file reader so taht all methods will avilable in the reader

    reader.readAsDataURL(file); // conversion to base 64 url  FroalaEditorComponent ///  image url ka type hai

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    // setImage(e.target.files[0])
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



 const formData = new FormData()

formData.append("image", image);
// formData.append("name" , formBody.name)  // redundany add //add code verbosity

Object.entries(formBody).forEach(([key, value]) => {
  formData.append(key, value);
});




  const addProductApiHandler = async () => {
    try {
      const res = await axiosInstance.post("/product/add", formData);

      if (res.status === 200) {
        toast.success(res.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-3">


      <div className="row">

        <div className="col-lg-9">
          <form>
            <div>
              <label> Product name</label>
              <input
                placeholder="enter product Name"
                name="name"
                value={formBody.name}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
            </div>

            <div>
              <label className="mb-1"> Product Description </label>

              <textarea
                placeholder="enter product Description"
                name="description"
                value={formBody.description}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <label> Color (seperated by commas) </label>
                <input
                  placeholder="enter product Color"
                  name="colors"
                  value={formBody.colors}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                />
              </div>

              <div className="col-6">
                <label> sizes (seperated by commas) </label>
                <input
                  placeholder="enter product Size"
                  name="sizes"
                  value={formBody.sizes}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <label> Product Price </label>
                <input
                  placeholder="enter product price"
                  name="price"
                  type="number"
                  min={1}
                  value={formBody.price}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                />
              </div>

              <div className="col-4">
                <label> Enter Discount (%)</label>
                <input
                  placeholder="enter Discount"
                  name="price"
                  type="number"
                  min={0}
                  value={formBody.discount}
                  onChange={handleInputChange}
                  className="form-control mb-3"
                />
              </div>

              <div className="col-4">
                <label> Upload Product Images max (5) </label>
                <input
                  placeholder="Upload Product Image"
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    handleImage(e)
                  }}
                />
              </div>
            </div>

            <button
              className="btn btn-success"
              type="button"
              onClick={addProductApiHandler}
            >
              {" "}
              Add Product{" "}
            </button>
          </form>

        </div>


        <div className="col-lg-3">
           <img src={image} alt="Product-img"/>
        </div>

      </div>





    </div>
  );
};

export default UploadProduct;
