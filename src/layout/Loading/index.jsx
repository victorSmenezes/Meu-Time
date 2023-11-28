import loading from '@/assets/loading.svg';
import { LoaderContainer } from './styles';
import Image from "next/image";

export default function Loading() {
  return (
    <LoaderContainer>
      <Image src={loading} width={50} alt="Loading" />
    </LoaderContainer>
  );
}