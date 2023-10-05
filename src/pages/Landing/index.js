import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

import { registerAuth, logout } from '../../store/Auth';
import api from '../../api';

const Landing = () => {
  const dispatch = useDispatch();
  
  const [chartOptions, setChartOptions] = useState(
    {
      options: {
        chart: {
          type: 'bar'
        }
      }
    }
  );
  const [chartSeries, setChartSeries] = useState([]);
  const login = async () => {
    try {
      // const { data } = await api.loginAdmin({
      //   email: 'admin@bcr.io',
      //   password: '123456'
      // });
      //
      // dispatch(registerAuth(data));

      const response = await api.adminOrderReport();
      // { status: 200, data: [{}, {}, {}, {}], message: "" }
      setChartSeries(
        [
          {
            data: response.data.map((item) => {
              return {
                x: moment(item.date, 'YYYY-MM-DD')
                  .format('DD MMM'),
                y: item.orderCount
              };
            })
          }
        ]
      );
    } catch (error) {}
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // /admin/order/reports
  const dummyResponses = [
    {
      date: '2022-01-01',
      orderCount: 1
    },
    {
      date: '2022-01-02',
      orderCount: 25
    },
    {
      date: '2022-01-03',
      orderCount: 45
    },
    {
      date: '2022-01-04',
      orderCount: 65
    },
    {
      date: '2022-01-05',
      orderCount: 112
    },
    {
      date: '2022-01-06',
      orderCount: 245
    },
    {
      date: '2022-01-07',
      orderCount: 550
    },
    {
      date: '2022-01-08',
      orderCount: 67
    },
    {
      date: '2022-01-09',
      orderCount: 19
    },
    {
      /**
       * Format tanggal sesuai ISO : YYYY-MM-DDTHH:mm:ss.SSSZ
       * SSS (S kapital) adalah millisecond
       * Z adalah timezone
       * */
      date: '2022-01-10',
      orderCount: 20
    }
  ];

  // Cara mendapatkan tanggal paling awal dalam sebuah bulan
  const startDate = moment('October - 2022', 'MMMM - YYYY')
    .startOf('month')
    .format('YYYY-MM-DD');

  // Cara mendapatkan tanggal paling akhir dalam sebuah bulan
  const endDate = moment('October - 2022', 'MMMM - YYYY')
    .endOf('month')
    .format('YYYY-MM-DD');

  // Cara mendapatkan tahun berjalan alias tahun yg sedang kita jalani
  const currentYear = moment().format('YYYY');

  useEffect(() => {
    setTimeout(() => {
      setChartSeries(
        [
          {
            data: dummyResponses.map((item) =>
              ({
                x: moment(item.date, 'YYYY-MM-DD')
                  .format('DD MMM'),
                y: item.orderCount
              })
            )
          }
        ]
      );
    }, 3000);
  }, []);

  return (
    <>
      <div className="p-3 d-flex flex-row">
        <Chart
          type="bar"
          options={chartOptions}
          series={chartSeries}
          className="w-75"
        />
      </div>
    </>
  );
};

export default Landing;