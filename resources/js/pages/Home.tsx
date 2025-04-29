import BorderSepartor from '@/components/border-separator';
import { Gallery4 } from '@/components/CaseStudy';
import { FeatureGuide } from '@/components/feature-guide';
import Hero from '@/components/Hero';
import { ThreeDMarqueeDemo } from '@/components/marquee';

import DefaultLayout from '@/layouts/DefaultLayout';

const Home = () => {
    return (
        <div>
            <DefaultLayout>
                <div className="container border-x p-0">
                    <div className="md:mt-0">
                        <Hero />
                    </div>
                </div>



                <BorderSepartor />
                <div className="container border-x">
                    <FeatureGuide />
                </div>

                <BorderSepartor />
                <div className="container border-x">
                    <Gallery4 />
                </div>

                <BorderSepartor />
                <div className="container border-x">
                    <ThreeDMarqueeDemo />
                </div>
            </DefaultLayout>
        </div>
    );
};

export default Home;
