import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            ssr: false,
            ur: false,
            islr: false,
            lr: false
        })
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.card.rarity == "LR") {
            this.setState({ lr: true, islr: true })
        }
        else if (this.props.card.rarity == "UR") {
            this.setState({ ur: true })
        }
        else {
            this.setState({ ssr: true })
        }

    }

    render() {
        const { lr, islr, ur, ssr } = this.state
        return (
            <div className='pt-5 md:px-5'>
                <div>
                    {
                        islr ? (
                            <button className='bg-slate-600 text-gray-900 w-16 rounded-md mr-2' onClick={() => this.setState({ lr: true, ur: false, ssr: false })}>LR</button>
                        ) : (
                            null
                        )
                    }
                    <button className='bg-slate-600 text-gray-900 w-16 rounded-md' onClick={() => this.setState({ lr: false, ur: true, ssr: false })}>UR</button>
                    <button className='ml-2 bg-slate-600 text-gray-900 w-16 rounded-md' onClick={() => this.setState({ lr: false, ur: false, ssr: true })}>SSR</button>
                    <Link to={"/card-detail/" + this.props.card.id }>
                        {
                            lr ? (
                                <img className='cursor-pointer md:h-64' src={this.props.card.lrcardimg} />
                            ) : ur ? (
                                    <img className='cursor-pointer md:h-64' src={this.props.card.urcardimg} />
                            ) : (
                                        <img className='cursor-pointer md:h-64' src={this.props.card.ssrcardimg} />
                            )
                        }
                    </Link> 
                </div>
                <div className='flex flex-row justify-center items-center'>
                    {
                        lr ? (
                            <img className='w-14 h-26' src='./lrlogo.png' />
                        ) : ur ? (
                            <img className='w-14 h-26' src='./urlogo.png' />
                        ) : (
                            <img className='w-14 h-26' src='./ssrlogo.png' />
                        )
                    }
                    <p className='font-semibold text-gray-900'>{this.props.card.character + " " + this.props.card.name}</p>
                </div>
            </div>
        )
    }
}

export default Card;