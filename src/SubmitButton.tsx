const SubmitButton = ({
  onClick,
  isLoading,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}) => {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        className={`text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
          isLoading ? "pointer-events-none opacity-70" : ""
        }`}
      >
        {isLoading ? "Cargando..." : "Buscar recomendación"}
      </button>
    </>
  );
};

export default SubmitButton;
