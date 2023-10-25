import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  createCredentials,
  deleteCredentials,
  setCredentials,
  getCredential,
  patchCredentials,
} from "../api/credentials.api";

export function CredentialFormPage() {
  // UseForm methods
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // Image form state
  const [image, setImage] = useState(null);
  // Using useNavigate in a constant
  const navigate = useNavigate();
  // Using useParams in a constant
  const params = useParams();
  // If editing, get the params.id (id credential) and set values with api values
  useEffect(() => {
    async function loadCredential() {
      if (params.id) {
        const get = await getCredential(params.id);
        document.getElementById("image").defaultValue = get.data.image;
        setValue("name", get.data.name);
        setValue("lastname", get.data.lastname);
        setValue("code", get.data.code);
        setValue("blood", get.data.blood);
        setValue("degree", get.data.degree);
        setValue("mail", get.data.mail);
        setValue("phone", get.data.phone);
      }
    }
    loadCredential();
  }, []);

  // This is executed if the form is submitted
  const onSubmit = handleSubmit(async (data) => {
    /* 
    Create new FormData object in constant (f) adding the image state with append 
    then add in (f) the values of the data(data form) with a bucle for 
    each key in the data object and append this key-value to the FormData (f).
    */
    const f = new FormData();
    if (image) {
      f.append("image", image[0]);
    }
    for (const key in data) {
      f.append(key, data[key]);
    }
    // If editing, get params.id (id credential) and set credential
    if (params.id) {
      await patchCredentials(params.id, f);
      toast.success("Credential edited", {
        position: "bottom-right",
        style: {
          background: "#101020",
          color: "white",
        },
      });
    }
    // Create credential with Formdata
    else {
      await createCredentials(f);
      toast.success("Credential created", {
        position: "bottom-right",
        style: {
          background: "#101020",
          color: "white",
        },
      });
    }

    navigate("/credentials");
  });
  // On change the image form set the image state
  const patchCredential = (e) => {
    setImage(e);
  };
  // Function for delete credential
  function deleteCredential() {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      deleteCredentials(params.id);
      navigate("/credentials");
      toast.success("Credential deleted", {
        position: "bottom-right",
        style: {
          background: "#101020",
          color: "white",
        },
      });
    }
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          // Add "value" at object data
          {...register("name", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.name && <span>Name is required</span>}
        <input
          type="text"
          placeholder="Lastname"
          {...register("lastname", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.lastname && <span>Lastname is required</span>}
        <input
          type="email"
          placeholder="Email adress"
          // Add "value" at object data
          {...register("mail", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.name && <span>Email is required</span>}
        <input
          type="number"
          placeholder="Phone number"
          // Add "value" at object data
          {...register("phone", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.name && <span>Phone is required</span>}
        <input
          type="number"
          placeholder="Code"
          {...register("code", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.age && <span>Code is required</span>}

        <input
          type="text"
          placeholder="Type blood"
          {...register("blood", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.blood && <span>Type blood is required</span>}

        <input
          type="text"
          placeholder="Degree"
          {...register("degree", { required: true })}
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        {errors.degree && <span>Degree is required</span>}
        <input
          onChange={(e) => patchCredential(e.target.files)}
          type="file"
          id="image"
          className="bg-slate-700 rounded-lg block w-full mb-3 p-2"
        />
        <button className="bg-green-500 hover:bg-green-600 rounded-lg block w-full mb-3 p-2">
          Save
        </button>
      </form>

      {
        // If editing, show button delete
        params.id && (
          <button
            className="bg-red-500 hover:bg-red-600 rounded-lg block w-full mb-3 p-2"
            onClick={deleteCredential}
          >
            Delete
          </button>
        )
      }
    </div>
  );
}
