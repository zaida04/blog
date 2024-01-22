export default function XMailTable() {
    return (
        <div className="pb-6 flex flex-col">
            <table className="table-auto border-2 border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 md:px-20">Subject</th>
                        <th className="border border-slate-600 md:px-24">Sender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 md:px-20">AP Computer Science Homework</td>
                        <td className="border border-slate-700 md:px-24">Mr. Guy</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 md:px-20">Materials needed</td>
                        <td className="border border-slate-700 md:px-24">Ms. Teacher</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 md:px-20">Welcome back to school</td>
                        <td className="border border-slate-700 md:px-24">Mr. Principal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
