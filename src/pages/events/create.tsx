import { api } from "@services/api";
import { useRouter } from "next/router";
import { useState } from "react";

const Create = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="px-16 py-8 w-full flex flex-col">
      <h1 className="">Criar evento</h1>
      <div className="h-16" />
      <form className="">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="title"
          >
            Título
          </label>
          <input
            className="bg-white  focus:ring focus:ring-blue-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block w-full appearance-none leading-normal"
            id="title"
            type="text"
            placeholder="Evento..."
            onChange={(e) => setTitle(e.currentTarget.value)}
            value={title}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="description"
          >
            Descrição
          </label>
          <input
            className="bg-white  focus:ring focus:ring-blue-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block w-full appearance-none leading-normal"
            id="description"
            type="text"
            placeholder="Descrição..."
            onChange={(e) => setDescription(e.currentTarget.value)}
            value={description}
          />
        </div>
        <div className="h-8" />
        <div className="flex items-center justify-between">
          <button
            className="bg-red-700 text-center hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => router.back()}
          >
            Voltar
          </button>
          <button
            className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              if (title && description) {
                api.createEvent({ title, description }, "asdf");
                router.push("/events");
              } else window.alert("Preencha todos os campos");
            }}
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
