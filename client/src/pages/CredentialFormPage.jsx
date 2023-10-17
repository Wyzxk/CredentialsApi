import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  createCredentials,
  deleteCredentials,
  setCredentials,
  getCredential,
} from "../api/credentials.api";
export function CredentialFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    async function loadCredential() {
      if (params.id) {
        const get = await getCredential(params.id);
        setValue("name", get.data.name);
        setValue("lastname", get.data.lastname);
        setValue("code", get.data.code);
        setValue("blood", get.data.blood);
        setValue("degree", get.data.degree);
      }
    }
    loadCredential();
  }, []);
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await setCredentials(params.id, data);
      toast.success("Credential edited", {
        position: "bottom-right",
        style: {
          background: "#101020",
          color: "white",
        },
      });
    } else {
      await createCredentials(data);
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
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Name is required</span>}
        <input
          type="text"
          placeholder="Enter your lastname"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && <span>Lastname is required</span>}

        <input
          type="number"
          placeholder="Enter your code"
          {...register("code", { required: true })}
        />
        {errors.age && <span>Age is required</span>}

        <input
          type="text"
          placeholder="Enter your type of blood"
          {...register("blood", { required: true })}
        />
        {errors.blood && <span>Type blood is required</span>}

        <input
          type="text"
          placeholder="Enter your degree"
          {...register("degree", { required: true })}
        />
        {errors.degree && <span>Degree is required</span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={() => {
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
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
