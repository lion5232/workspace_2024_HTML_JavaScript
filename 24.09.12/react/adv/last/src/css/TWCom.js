import './TWCom.css'


/**
 *  class 값들을 나열해가면서 디자인을 즉각적으로 적용하는 방ㅂ
 * 중요한 것은 샘플확인 , class  
 */
export default function TWCom () {
    return (
        <>
            <div className='text-blue-500'>
                <h3>tailwind css</h3>
            </div>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <div class="pt-6 text-center space-y-4">
                    <blockquote>
                    <p class="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                    </blockquote>
                    <figcaption class="font-medium">
                    <div class="text-red-500 dark:text-red-400">
                        Sarah Dayan
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                    </figcaption>
                </div>
            </figure>
        </>
    );
}