import Btn from "./components/Btn";


export default function Price() {
  return (
    <section>
      <div>
        <div>
          <img src="/kalilinux.svg" alt="kali linux logo" />
          <span>Kali Linux Do Básico ao Avançado</span>
          <span>DE R$ 700,00</span>
          <span>Por apenas 12x de</span>
          <span>R$ 29,00</span>
          <span>OU R$ 279,00 a vista</span>
          <button>
            Torne-se um hacker Agora
          </button>
        </div>
        <div>
          <h2> Garantia Incondicional de 7 Dias </h2>
          <p>Se por qualquer motivo o curso não atender às suas expectativas, você tem 7 dias para solicitar o reembolso total, sem burocracia e sem perguntas.</p>
        </div>
      </div>
      <div>
        <h1>Pronto para começar sua jornada no Kali Linux?</h1>
        <span>Inscreva-se agora e dê o primeiro passo para se tornar um especialista em segurança digital!</span>
        <Btn/>
      </div>
    </section>
  );
}