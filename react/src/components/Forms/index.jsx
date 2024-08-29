import { useState } from 'react';
import './styles.css'

export default function Forms () {
    const [formData, setFormData] = useState({
        nome:'',
        email:''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    return (
        <section>
          <h2>Form simples</h2>
          <form>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <br />
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div>
              <label htmlFor="idade">Idade:</label>
              <input type="number" id="idade" name="idade" min="18" max="100" />
            </div>
            <div>
              <label htmlFor="cor">Cor favorita:</label>
              <input type="color" id="cor" name="cor" />
            </div>
            <div>
              <label htmlFor="anexo">Anexo:</label>
              <input type="file" id="anexo" name="anexo" />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
    )
}
