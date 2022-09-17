import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ErrorBaundary from "../errorBaundary/errorBaundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {

    const [selectedChar, setChar] = useState(null);



    const onCharSelected = (id) => {
        setChar(id);
    }


        return (
            <div className="app">
                <AppHeader/>
                <main>
                {/* <ErrorBaundary>
                    <RandomChar/>
                </ErrorBaundary>    
                    <div className="char__content">
                    <ErrorBaundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBaundary>
                        <ErrorBaundary>
                            <CharInfo charId={selectedChar}/>
                        </ErrorBaundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/> */}
                    <AppBanner/>
                    <ComicsList/>
                </main>
            </div>
        )
    
}

export default App;