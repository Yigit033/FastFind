import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "fastfind",
    description: "Discover & Share API Prompts"
}

const RootLayout =({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider/>
            <div className='main'>  
                <div className='gradient'/>
            </div>


        </body>
        <main className='app'>
            <Nav/>
            {children}
        </main>
    </html>
  );
}

export default RootLayout;