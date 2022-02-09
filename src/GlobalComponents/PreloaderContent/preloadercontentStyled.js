import styled, { keyframes } from "styled-components";


const light = () => `
background: #f2f2f2;
`;

const dark = () => `
background: #444
`;

const skelleton = () => `
background: #777;
`;

const text = () => `
width: 99%;
height: 12px;
`;
const title = () => `
width: 50%;
height: 20px;
margin-bottom: 15px;
`;
const avatar = () => `
width: 100px;
height: 100px;
border-radius: 50%;
`;
const thumbnail = () => `
width: 100px;
height: 100px;
`;

export const DivClasses = styled.div`
background: #ddd;
margin: 10px;
border-radius: 4px;
${props => props.type === "text" ? text
        : props.type === "title" ? title
            : props.type === "avatar" ? avatar
                : props.type === "thumbnail" && thumbnail
    }
`;

export const SkelletonWrapper = styled.div`
width: 100%;
margin: 20px auto;
//padding: 10px 15px;
border-radius: 5px;
position: relative;
//border-style: solid;
overflow-x: hidden;
${props => props.theme === "light" ? light
        : props.theme === "dark" && dark

    }
`

const Loading = keyframes`
0%{transform:translateX(-30%)}
50%{transform:translateX(60%)}
100%{transform:translateX(100%)}
`

export const ShymerWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
animation: ${Loading} .5s infinite;
animation-timing-function: linear;
`

export const Shymer = styled.div`
width: 40%;
height: 100%;
background: rgba(255,255,255,0.6);
transform: skewX(-30deg);
`
