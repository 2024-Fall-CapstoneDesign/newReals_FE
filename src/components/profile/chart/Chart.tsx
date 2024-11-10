import * as S from './Chart.Style';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#6F60FF', '#9F94FF', '#BDB6FF'];

type ValueItem = {
  value: number;
};

interface ChartProps {
  category: string;
  values: ValueItem[];
}

const Chart = ({ category, values }: ChartProps) => {
  return (
    <S.ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={values} innerRadius={35} outerRadius={76} dataKey="value">
            {values.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <S.CenterText>{category}</S.CenterText>
    </S.ChartContainer>
  );
};

export default Chart;
