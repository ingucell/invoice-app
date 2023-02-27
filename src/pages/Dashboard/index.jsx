import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import PieChart from '../../components/PieChart'
import GeographyChart from "../../components/GeographyChart.jsx";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const iphoneSE = useMediaQuery("(min-width:300px)");
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.black[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}

    
      <Box
        display="grid"
        gridAutoRows="140px"
        gap="10px"
        sx={{
          gridTemplateColumns: iphoneSE ? "repeat(8, 1fr)" : "repeat(12, 1fr)", 
        }}
      >
        {/* ROW 1 */}
        <Box
          display="flex"
          backgroundColor={colors.black[400]}
          alignItems="center"
          justifyContent="center"
          sx={
             {
              gridColumn: iphoneSE ? "span 4" : "span 1", 
            
            }
          } >
          <StatBox
            title="12,361"
            subtitle="TOTAL QUOTATION"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.orange[600], 
                fontSize: "26px" 
                
              }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={
            {
              gridColumn: iphoneSE ? "span 4" : "span 1", 
           }
         }
        >
          <StatBox
            title="431,225"
            className="another"
            subtitle="ACCEPTED QUOTATION"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.orange[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={
            {
              gridColumn: iphoneSE ? "span 4" : "span 1", 
           }
         }
          
        >
          <StatBox
            title="32,441"
            subtitle="TOTAL INVOICE"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.orange[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={
            {
              gridColumn: iphoneSE ? "span 4" : "span 1", 
           }
         }
        >
          <StatBox
            title="1,325,134"
            subtitle="OVERDUE INVOICE"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.orange[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

       

        {/* Second Row */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.blue[500]}`}
            colors={colors.black[100]}
            p="15px"
          >
           
            <Typography color={colors.black[100]} variant="h5" fontWeight="600">
             Welcome Mathias Lawson | Monday 27th Feburary 2023
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.blueAccent[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.blue[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.black[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.black[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.green[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                Sent
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
          p="10px"
        >
           <Typography variant="h5" fontWeight="600">
           Status wise Quotation
          </Typography>
           <PieChart />
  
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            
          </Box>
        </Box>


        {/* Row 3 part 2  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
          p="10px"
        >
           <Typography variant="h5" fontWeight="600">
           Status wise Invoice
          </Typography>
           <PieChart />
  
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            
          
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.blue[500]}`}
            colors={colors.black[100]}
            p="15px"
          >
           
            <Typography color={colors.black[100]} variant="h5" fontWeight="600">
             Welcome Mathias Lawson | Monday 27th Feburary 2023
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.blueAccent[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.blue[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.black[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.black[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.green[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                Sent
              </Box>
            </Box>
          ))}
        </Box>



       
      </Box>
    </Box>
  );
};

export default Dashboard;