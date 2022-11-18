import { SetStateAction, useState } from 'react';
import ColorGenerator from '../components/ColorGenerator';
import { rgbObject } from '../components/ColorGenerator/interface';
import { setNewColor } from '../services/newColor';

export default function Home() {
  const [color, setColor] = useState<rgbObject>({
    r: 0,
    g: 0,
    b: 0,
    answer: '',
  });
  const [answerColor, setAnswerColor] = useState('Vermelho');
  function handleAnswerColorChange(e: SetStateAction<string>) {
    setAnswerColor(e);
  }
  function handleSendAnswer() {
    let data = { ...color };
    data.answer = answerColor;
    setNewColor(data);
  }
  return (
    <div className='flex flex-col items-center mt-32'>
      <h1 className='text-white text-2xl mb-4'>Color Collector</h1>
      <p>Qual a cor que você está vendo?</p>
      <ColorGenerator color={color} setColor={setColor} />
      <select
        name='cor'
        className='p-2 mb-4'
        onChange={(event) => handleAnswerColorChange(event.target.value)}
      >
        <option value='Vermelho'>Vermelho</option>
        <option value='Rosa'>Rosa</option>
        <option value='Roxo'>Rosa</option>
        <option value='Marrom'>Marrom</option>
        <option value='Laranja'>Laranja</option>
        <option value='Verde'>Verde</option>
        <option value='Azul'>Azul</option>
        <option value='Amarelo'>Amarelo</option>
        <option value='Branco'>Branco</option>
        <option value='Preto'>Preto</option>
      </select>
      <button
        className='bg-white px-4 py-2 rounded hover:bg-white/[.80]'
        onClick={() => handleSendAnswer()}
      >
        Confirmar!
      </button>
    </div>
  );
}
