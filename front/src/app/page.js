export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="flex-grow">
          <p class="text-center text-5xl font-bold text-black p-10">
            Bienvenido
          </p>

          <p class="text-center text-2xl font-medium text-black">
            Trabajo Práctico PNT2
          </p>

          <p class="text-center text-lg font-bold text-black">
            Proyecto:{" "}
            <span class="text-left text-lg font-light text-black">iPiT2</span>
          </p>

          <p class="text-center text-lg font-bold text-black">
            Alumnos:{" "}
            <span class="text-left text-lg font-light text-black">
              Heber, Alan, Lean, Martin
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
