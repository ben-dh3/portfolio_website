import IntroductionSection from '../components/IntroductionSection';
import PortfolioView from '../components/PortfolioView';

export default function PortfolioPage(){

    return(
        <div className="font-Arimo bg-black text-white flex flex-col min-h-screen w-full">
            <IntroductionSection />
            <PortfolioView />
        </div>
    )
}
