import React from 'react';
import Card from './Card';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

export const StatCard = ({
  label,
  value,
  change,
  changeType = 'increase', // 'increase' | 'decrease' | 'neutral'
  changeLabel = 'vs last month',
  icon: Icon,
  subtitle,
  className = '',
}) => {
  const isPositive = changeType === 'increase' || (typeof change === 'number' && change >= 0);
  const isNegative = changeType === 'decrease' || (typeof change === 'number' && change < 0);

  return (
    <Card variant="default" className={`p-5 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-semibold tracking-wider text-[#8A9197] uppercase">
          {label}
        </span>
        {Icon ? (
          <div className="w-9 h-9 rounded-xl bg-[#F4F1EA] text-[#1B4D3E] flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <span className="font-sans-ui text-2xl sm:text-3xl font-bold tracking-tight text-[#191C1D]">
          {value}
        </span>

        {change !== undefined && (
          <span
            className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-md ${
              isPositive
                ? 'bg-[#E8F5E9] text-[#2D7D46]'
                : isNegative
                ? 'bg-[#FEE2E2] text-[#C53030]'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isPositive ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : isNegative ? (
              <ArrowDownRight className="w-3.5 h-3.5" />
            ) : null}
            {typeof change === 'number' && change > 0 ? `+${change}%` : `${change}%`}
          </span>
        )}
      </div>

      {(subtitle || changeLabel) && (
        <p className="mt-2 text-xs text-[#5A6065] flex items-center justify-between">
          <span>{subtitle || changeLabel}</span>
        </p>
      )}
    </Card>
  );
};

export default StatCard;
