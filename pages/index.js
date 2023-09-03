import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useChat } from "ai/react";
import { Divider, Input, Accordion, AccordionItem, } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import Swal from "sweetalert2";
import Layout from "/components/Layout";
import SwiperExplicacion from "../components/SwiperExplicacion";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit2, isLoading } =
    useChat();
  console.log(messages);
  const [inputs, setInputs] = useState({
    A: "",
    B: "",
    C: "",
  });
  const [stateA, setA] = useState("");
  const [stateB, setB] = useState("");
  const [stateC, setC] = useState("");
  const [resutaldo, setResultado] = useState(0);
  const [valorDelta, setDelta] = useState(0);
  function calcularDelta(a, b, c) {
    return b * b - 4 * a * c;

  }
  const handleOnChage = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if (e.target.name === "A") {
      setA(e.target.value);
    }
    if (e.target.name === "B") {
      setB(e.target.value);
    }
    if (e.target.name === "C") {
      setC(e.target.value);
    }
    console.log(e.target.value, e.target.name);
  };

  const handleSubmit = () => {
    if (!stateA || !stateB || !stateC) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "Ingrese todos los campos",
      });
      return;
    } else if (stateA == 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "No se puede dividir por 0",
      });
      return;
    } else if (isNaN(stateA) || isNaN(stateB) || isNaN(stateC)) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "Ingrese solo numeros",
      });
    }
    let delta = calcularDelta(stateA, stateB, stateC);
    setDelta(delta)
    if (delta < 0) {
      delta = delta * -1;
      let x1 = ((stateB * -1) / (2 * stateA)) * 1;
      if (x1 > 0) {
        x1 = "+" + x1;
      }
      let x1i = Math.sqrt(delta) / (2 * stateA) + "i";
      let x2 = ((stateB * -1) / (2 * stateA)) * -1;
      if (x2 > 0) {
        x2 = "+" + x2;
      }
      let x2i = Math.sqrt(delta) / (2 * stateA) + "i";
      setResultado({ resA: x1, resB: x2, resAi: x1i, resBi: x2i });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        html: "El valor de X1 es: " + x1 + x1i + '<br/>' + "El valor de X2 es: " + x2 + x2i + '<br/>' + "El valor de delta es: " + delta,
      });
      return;
    }
    let x1 = (-stateB + Math.sqrt(delta)) / (2 * stateA);
    let x2 = (-stateB - Math.sqrt(delta)) / (2 * stateA);
    Swal.fire({
      icon: "success",
      title: "Excelente!",
      html: "El valor de X1 es: " + x1 + '<br/>' + "El valor de X2 es: " + x2 + '<br/>' + "El valor de delta es: " + delta,
    });
    setResultado({ resA: x1, resB: x2 });
  };
  const limpiar = () => { setResultado(0); setDelta(0) }

  return (
    <Layout >
      {/*------------------------------Section de Calculadora de Bhaskara--------------------------------*/}
      <section id="inicio" className="flex justify-center items-center w-screen h-screen bg-[url('/img/fondo.avif')]  ">
        <div className=" grid grid-cols-1 gap-y-4 p-5 sm:w-5/6 md:w-4/6 bg-gray-700">
          <div className="w-full flex justify-center">
            <h2 className=" pt-5 text-white ">Calculadora de Bhaskara</h2>
          </div>
          <div className="w-full">
            <Divider></Divider>
          </div>
          <div className="w-full md:flex  sm:grid sm:grid-cols-1 md:justify-center md:gap-10">
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                Placeholder="Ingrese el valor de A"
                type="text"
                variant="bordered"
                name="A"
                className="bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                id="stateA"
                value={inputs.A}
                onChange={(e) => {
                  handleOnChage(e);
                }}
              />
            </div>
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                Placeholder="Ingrese el valor de B"
                type="text"
                variant="bordered"
                name="B"
                className="bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                id="stateB"
                value={inputs.B}
                onChange={(e) => {
                  handleOnChage(e);
                }}
              />
            </div>
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                Placeholder="Ingrese el valor de C"
                type="text"
                className="bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                name="C"
                id="stateC"
                value={inputs.C}
                onChange={(e) => {
                  handleOnChage(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" flex justify-center ">
              <div className="w-full flex justify-center">
                <button className="bg-[#20613f] rounded-3xl  w-auto p-2 text-white" onClick={() => handleSubmit()}>
                  Mandar
                </button>
              </div>
              <div className="w-full flex justify-center">
                <button className="bg-[#eb636b] rounded-3xl  w-auto p-2 text-white" onClick={() => limpiar()}>
                  limpiar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-5 ">
            <Accordion
              showDivider={true}
              className=" flex bg-[#20613f] flex-col text-white   gap-1 w-full max-w-[300px] "
              variant="shadow"
            >
              <AccordionItem
                key="1"
                aria-label="Connected devices"
                title="Valor de X1"
                className=" text-white"
              >
                <h3>El valor de X1 es: {resutaldo.resAi} {resutaldo.resA}</h3>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Apps Permissions"
                title="Valor de X2"
              >
                <h3>El valor de X2 es: {resutaldo.resBi} {resutaldo.resB}</h3>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Pending tasks"
                title="Valor de Delta"
              >
                <h3>El valor de Delta es: {valorDelta} </h3>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      {/*------------------------------Section de Chat--------------------------------*/}
      <section id="chat" className="grid grid-cols-1 mt-20 ">
        <div className="w-full flex justify-center mb-20 ">
          <h2 className="text-6xl text-center">Chat Inteligente</h2>
        </div>
        <div className="w-full flex justify-center px-5 mb-5 ">
          <form onSubmit={handleSubmit2} className="max-w-xl p-2 rounded-[35px]  bg-[#20613f] w-full">
            <div className="text-white   overflow-y-auto">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col mb-2 p-2 rounded-md ${m.role === "assistant"
                    ? "self-end bg-gray-800"
                    : "self-start bg-blue-700"
                    }`}
                >
                  <span
                    className={`text-xs ${m.role === "assistant" ? "text-right" : "text-left"
                      }`}
                  >
                    {m.role}
                  </span>{" "}
                  {m.content}
                </div>
              ))}
            </div>
            <div className="flex justify-between my-4">
              <label className="text-white block font-bold my-2">
                Escribe la pregunta
              </label>
              <button
                className="bg-[#374151] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
                disabled={isLoading || !input}
              >
                Enviar
              </button>
            </div>
            <textarea
              rows={4}
              value={input}
              onChange={handleInputChange}
              className="text-black bg-[#374151] px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Escribi la pregunta"
              autoFocus
            />
          </form>
        </div>
      </section>
      {/*------------------------------Section de Explicación--------------------------------*/}
      <div className="w-full flex justify-center mt-20 mb-20 ">
        <h2 className="text-6xl">Explicación</h2>
      </div>
      <section id="Explicacion" className="grid grid-cols-1 mx-auto w-full">
        <div className="flex justify-center w-full" >
          <div className="w-4/6">
            <SwiperExplicacion />
          </div>
        </div>
      </section>
      {/*------------------------------Section de Matematicos--------------------------------*/}
      <div className="w-full flex justify-center mt-20 mb-20 ">
        <h2 className="text-6xl">Matematicos</h2>
      </div>
      <section id="Matematicos" className="grid p-10  mt-5 mb-5 grid-cols-1 gap-5 md:grid-cols-3">
        <div className="  grid md:col-span-1">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/adrian-paenza.png')] rounded-xl overflow-hidden">
            <div className="flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Adrian Parenza</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>Nacio en argentina Buenos Aires,es periodista, desde entonces trabajó en
                diversos diarios y tuvo todas las series educativas de matemáticas
                del canal Encuentro. Hoy lleva adelante alterados por pi.</p>
            </div>
          </div>
        </div>
        <div className="grid  md:col-span-2">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/cabezon.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Eduardo Sáenz de Cabezón</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>Eduardo Sáenz de Cabezón es un matemático, profesor de Lenguajes y
                Sistemas Informáticos y también teólogo, aunque en la actualidad no
                ejerza como tal y reconocido especialista en monólogos científicos.
                Desarrolla su investigación en el área del álgebra computacional, a
                la que ha contribuido con 25 publicaciones de investigación y
                colaboraciones con matemáticos españoles y europeos como Henry P.
                Wynn. Tambien realiza una intensa labor de divulgación de las
                matemáticas mediante conferencias, espectáculos, charlas y talleres</p>
            </div>
          </div>
        </div>
        <div className=" grid md:col-span-2 pr-0">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover mx-auto bg-[url('/img/rene.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>René Descartes</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>René Descartes, fue un filósofo, matemático y físico francés considerado el padre de la geometría analítica y la filosofía moderna. Uno de los legados más perdurables de Descartes fue su desarrollo de la geometría cartesiana o analítica, que utiliza el álgebra para describir la geometría. Descartes inventó la convención de representar incógnitas en las ecuaciones con x , y , z y datos conocidos por a , b , c . También fue pionero en la notación estándar que usa superíndices para indicar los exponentes.Son conocidos los teoremas de Descartes acerca de los defectos angulares, teniendo similitudes con la teorema de Euler para poliedros y el teorema de los círculos de las cuatro tangentes.</p>
            </div>
          </div>
        </div>
        <div className="grid  md:col-span-1">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/isaac.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Isaac Newton</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>Isaac Newton fue un físico, teólogo, inventor, alquimista y matemático inglés. Desde finales de 1664 trabajó intensamente en diferentes problemas matemáticos. Abordó entonces el teorema del binomio, a partir de los trabajos de John Wallis, y desarrolló un método propio denominado cálculo de fluxiones. Poco después regresó a la granja familiar a causa de una epidemia de peste bubónica.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
