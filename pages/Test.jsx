import { useRouter } from 'next/router';

const MyForm = () => {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // 提交表單數據
        router.push('/submitted', undefined, { shallow: false, cacheResponse: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* 表單內容 */}
        </form>
    );
};
