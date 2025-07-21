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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProductApiHandler = async () => {
    try {
      const res = await axiosInstance.post("/product/add", formBody);

      if(res.status === 200){
        toast.success(res.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-3">
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
  );
};

export default UploadProduct;
