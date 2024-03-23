import Image from "next/image"

export default function Section(){
    const gadgets = [
        {title: 'reviving retro PCs', image: '/assets/images/image-retro-pcs.jpg', num: '01', desc: 'What happens when old PCs are given modern upgrades?', id: 1},
        {title: 'top 10 laptops of 2022', image: '/assets/images/image-top-laptops.jpg', num: '02', desc: 'Our best picks for various needs and budgets.', id: 2},
        {title: 'the growth of gaming', image: '/assets/images/image-gaming-growth.jpg', num: '03', desc: 'How the pandemic has sparked fresh opportunities.', id: 3},
    ]
    return(
        <div className="flex gap-2 mt-8 flex-wrap justify-between">
            {gadgets.map((gadget)=>{
                return(
                    <div key={gadget.id} className="flex gap-[5%] items-start w-[380px] mb-4 lg:mb-0">
                        <div className="w-[40%]">
                            <Image 
                                src={gadget.image}
                                height={1000}
                                width={1000}
                                alt="gadget image"
                            />
                        </div>
                        <div className="w-[50%]">
                            <h3 className="text-gray-400 text-2xl font-bold mb-2">{gadget.num}</h3>
                            <h5 className="capitalize text-black font-bold text-lg mb-2">{gadget.title}</h5>
                            <p>{gadget.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}