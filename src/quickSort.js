import React, { useState } from 'react';

// クイックソートビジュアライザーコンポーネント
const QuickSortVisualizer = () => {
    // 数字の配列の状態を管理
    const [numbers, setNumbers] = useState([5, 3, 8, 4, 2, 7, 1, 9, 0, 6]);
    // 数字に対応する色のマッピング
    const colorMap = {
        0: 'red',
        1: 'orange',
        2: 'yellow',
        3: 'green',
        4: 'blue',
        5: 'indigo',
        6: 'violet',
        7: 'purple',
        8: 'pink',
        9: 'brown'
    };

    // 非同期処理のためのスリープ関数
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // クイックソートの実装
    const quickSort = async (arr, start, end) => {
        if (start >= end) {
            return;
        }
        let index = await partition(arr, start, end);
        await Promise.all([
            quickSort(arr, start, index - 1),
            quickSort(arr, index + 1, end)
        ]);
        setNumbers([...arr]); // 状態の更新
    };

    // パーティション関数
    const partition = async (arr, start, end) => {
        const pivotValue = arr[end];
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex++;
                await sleep(100); // アニメーションのための遅延
                setNumbers([...arr]); // 状態の更新
            }
        }
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        return pivotIndex;
    };

    // 配列をシャッフルする関数
    const shuffle = () => {
        let nums = [...numbers];
        for (let i = nums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nums[i], nums[j]] = [nums[j], nums[i]]; // 要素の交換
        }
        setNumbers(nums); // 状態の更新
    };

    // クイックソートを開始する関数
    const startQuickSort = () => {
        let nums = [...numbers];
        quickSort(nums, 0, nums.length - 1);
    };

    // コンポーネントのレンダリング
    return (
        <section className="sort-visualizer">
            <button className="sort-button" onClick={startQuickSort}>クイックソート</button>
            <button className="shuffle-button" onClick={shuffle}>シャッフル</button>
            <div className="grid-container">
                {numbers.map((number, index) => (
                    // 各数字を色付きのブロックとして表示
                    <div key={index} style={{ backgroundColor: colorMap[number], width: (number + 1) * 30 + 'px' }} className="grid-item">{number}</div>
                ))}
            </div>
        </section>
    );
};

export default QuickSortVisualizer;
