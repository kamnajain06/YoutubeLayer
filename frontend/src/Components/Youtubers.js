import React from 'react'

const Youtubers = () => {

    function getYoutuberData(){
        if(User.accountType==='Youtuber'){
            let youtuberData =[];
            Object.values(User).forEach((accountType)=> {
                accountType.forEach((userInfo)=> {
                    youtuberData.push(userInfo);
                })
            })
            console.log(youtuberData);
            return youtuberData;
        }
        return [];
    }

    const myYoutuberData = getYoutuberData();

  return (
    <div className='flex justify-center'>
        <div className='gap-x-4'>
            <label for='search'></label>
            <input type='search' id =' search' className='text-black mr-[20px] w-[300px] rounded-md px-[8px] py-[2px]'></input>
            <button className='bg-white text-black px-[3px] rounded-sm'>Search</button>
        </div>
        <div>
            <table>
                <tbody>
                    {
                        myYoutuberData.map((youtuber)=> (
                            <tr key={`${youtuber.firstName} && ${youtuber.lastName}}`}>
                                <td>
                                    <div>
                                        <div>
                                            <img src={youtuber.image}></img>
                                        </div>
                                        <div>
                                            <div>
                                                <div>
                                                    {youtuber.firstName}
                                                </div>
                                                <div>
                                                    {youtuber.lastName}
                                                </div>
                                            </div>
                                            <div>
                                                {youtuber.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
)
}
export default Youtubers;
