

export const testUser = {
    email: 'jmgprogramador@gmail.com',
    password: 'test1'
};

export const generateArticle = () => {
    const timestamp = Date.now();
    return {
        title: `Hybrid Test ${timestamp}`,
        description: `Test Description ${timestamp}`,
        body: 'This article was created via API and verified via UI.',
        tagList: ['qa', 'hybrid']
    };
}