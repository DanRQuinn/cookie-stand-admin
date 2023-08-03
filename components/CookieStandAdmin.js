import Head from '@/components/Head';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import cookieStands from '@/components/Main';

export default function Home() {
 
  return (
    <div>
      <Head />

      <Header className="p-4 text-white bg-green-500"/>

      <Main className="container p-4 mx-auto w-500" />

      <Footer className="p-4 text-left mt-10rem" cookieStands={cookieStands}/>
      
    </div>
  );
}
