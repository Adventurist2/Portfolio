import { Card } from "./ui/card"; // Ensure the path to `Card` is correct
import { InfiniteMovingCards } from "./infinite-moving-cards";
const ImageLink = "/assests/4058273.png";


const list = [
    {
        title: "Exceptional Guidance and Expertise",
        description: "Chandan Achary's dedication and innovative mindset left a profound impact on my project. His ability to simplify complex concepts and provide actionable solutions was unparalleled.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "A True Visionary",
        description: "Chandan’s creative approach and problem-solving skills are truly remarkable. Working with him was a seamless experience, and his commitment to excellence stood out.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "Outstanding Professionalism and Creativity",
        description: "Chandan demonstrated exceptional professionalism and creativity throughout our collaboration. His ability to think outside the box and deliver results exceeded all expectations.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "Innovative Solutions, Exceptional Results",
        description: "Chandan Achary’s innovative ideas and meticulous execution were key to the success of our project. His expertise and attention to detail were evident in every aspect of his work.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "Reliable and Knowledgeable Partner",
        description: "Collaborating with Chandan was a fantastic experience. His in-depth knowledge and dedication ensured that every milestone was met with precision and quality.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    },
    {
        title: "Transformative Skills and Support",
        description: "Chandan's ability to translate ideas into impactful outcomes is unmatched. His supportive nature and technical skills made all the difference in achieving our goals.",
        imageLink: ImageLink,
        username: "Chandan Achary"
    }
];


export function InfiniteScroll(){
    return <div>
        <div className="w-full flex justify-center text-3xl text-white z-50">Testimonials</div>
        <InfiniteMovingCards
        items={list}
        direction="right"
        speed="normal"
      />
        <InfiniteMovingCards
        items={list}
        // direction="left"
        speed="normal"
      />
    </div>
}

export default function Infinite() {
    return (
        <div>
            <div className="slider w-screen overflow-hidden h-60"
        style={{ '--quantity': list.length } as React.CSSProperties}
        >
            <div className="flex m-5 list">
                {list.map((item, index) => (
                    <Card
                        key={index} 
                        index = {index}
                        title={item.title}
                        description={item.description}
                        imageLink={item.imageLink}
                        username={item.username}
                    />
                ))}
            </div>
        </div>
        <div 
        className="slider w-screen overflow-hidden h-60"
        data-reverse={"true"}
        style={{ '--quantity': list.length } as React.CSSProperties}
        >
            <div className="flex m-5 list">
                {list.map((item, index) => (
                    <Card
                        key={index} 
                        index = {index}
                        title={item.title}
                        description={item.description}
                        imageLink={item.imageLink}
                        username={item.username}
                    />
                ))}
            </div>
        </div>

        </div>
        
    );
}
