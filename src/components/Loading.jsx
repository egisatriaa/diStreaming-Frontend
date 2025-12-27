import { Commet } from 'react-loading-indicators';
import './StyleComponents/Loading.css';

export default function Loading() {
    return (
        <div className="loading-container">
            <Commet color="#5831cc" size="large" text="Wait..." textColor="#b7aeae" />
        </div>
    );
}
